import { Component, inject, input, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { St5ButtonBlock } from '../../blocks/button/button.block';
import { St5FieldBlock } from '../../blocks/field/field.block';
import { St5AnalysisFormPattern } from '../../patterns/analysis-form/analysis-form.pattern';
import { St5AnalysisResultPattern } from '../../patterns/analysis-result/analysis-result.pattern';
import type {
  MetaAdsAnalysisFormValue,
  MetaAdsAnalysisRunRequest,
  MetaAdsAnalysisViewModel,
} from './meta-ads-analysis.vm';
import { sampleMetaAdsAnalysisFormValue } from './meta-ads-analysis.vm';

type MetaAdsAnalysisField = keyof MetaAdsAnalysisFormValue;

@Component({
  selector: 'st5-meta-ads-analysis-page',
  imports: [
    ReactiveFormsModule,
    St5AnalysisFormPattern,
    St5AnalysisResultPattern,
    St5ButtonBlock,
    St5FieldBlock,
  ],
  template: `
    <section class="grid grid-cols-[minmax(20rem,0.82fr)_minmax(0,1.18fr)] items-start gap-4 max-[980px]:grid-cols-1">
      <form [formGroup]="form" (ngSubmit)="runAnalysis()">
        <st5-analysis-form-pattern
          heading="Meta ads analysis"
          description="Submit a sample ad account request to the deterministic Meta ads analysis flow."
        >
          <st5-field-block label="Ad account id" [error]="errorFor('accountId')">
            <input
              class="min-h-11 w-full rounded-lg border border-sv5-line bg-sv5-panel-muted px-3 text-sv5-ink outline-none focus:border-sv5-teal"
              type="text"
              formControlName="accountId"
              placeholder="act_247357556342146"
            >
          </st5-field-block>

          <st5-field-block label="Date range" [error]="errorFor('dateRange')">
            <select
              class="min-h-11 w-full rounded-lg border border-sv5-line bg-sv5-panel-muted px-3 text-sv5-ink outline-none focus:border-sv5-teal"
              formControlName="dateRange"
            >
              <option value="last_7_days">Last 7 days</option>
              <option value="last_30_days">Last 30 days</option>
              <option value="this_quarter">This quarter</option>
            </select>
          </st5-field-block>

          <st5-field-block label="Objective" [error]="errorFor('objective')">
            <select
              class="min-h-11 w-full rounded-lg border border-sv5-line bg-sv5-panel-muted px-3 text-sv5-ink outline-none focus:border-sv5-teal"
              formControlName="objective"
            >
              <option value="leads">Leads</option>
              <option value="sales">Sales</option>
              <option value="awareness">Awareness</option>
            </select>
          </st5-field-block>

          <st5-button-block
            buttonType="submit"
            tone="teal"
            [disabled]="vm().state === 'running'"
            [text]="vm().state === 'running' ? 'Running...' : 'Run Meta analysis'"
          />
        </st5-analysis-form-pattern>
      </form>

      <st5-analysis-result-pattern [vm]="resultVm()" />
    </section>
  `,
})
export class St5MetaAdsAnalysisPage {
  private readonly formBuilder = inject(FormBuilder);

  readonly vm = input.required<MetaAdsAnalysisViewModel>();
  readonly runRequested = output<MetaAdsAnalysisRunRequest>();

  protected readonly submitAttempted = signal(false);
  protected readonly form = this.formBuilder.nonNullable.group({
    accountId: [sampleMetaAdsAnalysisFormValue.accountId, [Validators.required, Validators.minLength(3)]],
    dateRange: [sampleMetaAdsAnalysisFormValue.dateRange, [Validators.required]],
    objective: [sampleMetaAdsAnalysisFormValue.objective, [Validators.required]],
  });

  protected resultVm() {
    return {
      ...this.vm(),
      accent: 'teal' as const,
    };
  }

  protected errorFor(field: MetaAdsAnalysisField): string | null {
    const control = this.form.controls[field];
    if (!control.invalid || (!control.touched && !this.submitAttempted())) return null;
    if (control.hasError('required')) return 'This field is required.';
    if (control.hasError('minlength')) return 'Use at least 3 characters.';
    return 'Review this field.';
  }

  protected runAnalysis(): void {
    this.submitAttempted.set(true);
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.runRequested.emit(this.form.getRawValue());
  }
}
