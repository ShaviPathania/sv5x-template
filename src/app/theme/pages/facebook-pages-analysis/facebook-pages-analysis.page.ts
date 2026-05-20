import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { St5ButtonBlock } from '../../blocks/button/button.block';
import { St5FieldBlock } from '../../blocks/field/field.block';
import { St5AnalysisFormPattern } from '../../patterns/analysis-form/analysis-form.pattern';
import { St5AnalysisResultPattern } from '../../patterns/analysis-result/analysis-result.pattern';
import type { AnalysisResultViewModel } from '../../patterns/analysis-result/analysis-result.vm';
import type { FacebookPagesAnalysisPageIO } from './facebook-pages-analysis.io';
import { mockFacebookPagesAnalysisPageIO } from './facebook-pages-analysis.io';
import type { FacebookPagesAnalysisFormValue } from './facebook-pages-analysis.vm';
import { sampleFacebookPagesAnalysisFormValue } from './facebook-pages-analysis.vm';

type FacebookPagesAnalysisField = keyof FacebookPagesAnalysisFormValue;
type FacebookPagesAnalysisForm = FormGroup<{
  pageId: FormControl<string>;
  topic: FormControl<FacebookPagesAnalysisFormValue['topic']>;
  lookbackDays: FormControl<number>;
}>;

@Component({
  selector: 'st5-facebook-pages-analysis-page',
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
          eyebrow="Mock VIA flow"
          heading="Facebook pages analysis"
          description="Submit a page and topic into the deterministic Facebook pages analysis flow."
        >
          <st5-field-block label="Page id" [error]="errorFor('pageId')">
            <input
              class="min-h-11 w-full rounded-lg border border-sv5-line bg-sv5-panel-muted px-3 text-sv5-ink outline-none focus:border-sv5-blue"
              type="text"
              formControlName="pageId"
              placeholder="102988293558"
            >
          </st5-field-block>

          <st5-field-block label="Topic" [error]="errorFor('topic')">
            <select
              class="min-h-11 w-full rounded-lg border border-sv5-line bg-sv5-panel-muted px-3 text-sv5-ink outline-none focus:border-sv5-blue"
              formControlName="topic"
            >
              <option value="engagement">Engagement</option>
              <option value="growth">Growth</option>
              <option value="content_quality">Content quality</option>
            </select>
          </st5-field-block>

          <st5-field-block label="Lookback days" [error]="errorFor('lookbackDays')">
            <input
              class="min-h-11 w-full rounded-lg border border-sv5-line bg-sv5-panel-muted px-3 text-sv5-ink outline-none focus:border-sv5-blue"
              type="number"
              min="1"
              max="90"
              step="1"
              formControlName="lookbackDays"
            >
          </st5-field-block>

          <st5-button-block
            buttonType="submit"
            tone="blue"
            [disabled]="state === 'running'"
            [text]="state === 'running' ? 'Running...' : 'Run page analysis'"
          />
        </st5-analysis-form-pattern>
      </form>

      <st5-analysis-result-pattern [vm]="resultVm" />
    </section>
  `,
})
export class St5FacebookPagesAnalysisPage {
  @Input()
  io: FacebookPagesAnalysisPageIO = mockFacebookPagesAnalysisPageIO;

  protected state: AnalysisResultViewModel['state'] = 'idle';
  protected result: AnalysisResultViewModel['result'] = null;
  protected rawOutput = 'Run the form to call /api/facebook-pages-analysis.';
  protected submitAttempted = false;
  protected readonly form: FacebookPagesAnalysisForm;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.nonNullable.group({
      pageId: [sampleFacebookPagesAnalysisFormValue.pageId, [Validators.required, Validators.minLength(3)]],
      topic: [sampleFacebookPagesAnalysisFormValue.topic, [Validators.required]],
      lookbackDays: [
        sampleFacebookPagesAnalysisFormValue.lookbackDays,
        [Validators.required, Validators.min(1), Validators.max(90)],
      ],
    });
  }

  protected get resultVm(): AnalysisResultViewModel {
    return {
    state: this.state,
    title: this.statusTitle(),
    text: this.statusText(),
    result: this.result,
    rawOutput: this.rawOutput,
    accent: 'blue' as const,
    };
  }

  protected errorFor(field: FacebookPagesAnalysisField): string | null {
    const control = this.form.controls[field];
    if (!control.invalid || (!control.touched && !this.submitAttempted)) return null;
    if (control.hasError('required')) return 'This field is required.';
    if (control.hasError('minlength')) return 'Use at least 3 characters.';
    if (control.hasError('min') || control.hasError('max')) return 'Choose between 1 and 90 days.';
    return 'Review this field.';
  }

  protected async runAnalysis(): Promise<void> {
    this.submitAttempted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const request = this.form.getRawValue();
    this.state = 'running';
    this.result = null;
    this.rawOutput = 'Running...';

    try {
      const result = await this.io.onRunAnalysis(request);
      this.result = result;
      this.rawOutput = JSON.stringify(result, null, 2);
      this.state = 'success';
    } catch (error) {
      this.result = null;
      this.rawOutput = this.readError(error);
      this.state = 'error';
    }
  }

  private statusTitle(): string {
    if (this.state === 'success') return 'Analysis complete';
    if (this.state === 'error') return 'Analysis failed';
    if (this.state === 'running') return 'Running analysis';
    return 'Ready';
  }

  private statusText(): string {
    if (this.state === 'success') return this.result?.summary ?? 'Mock analysis returned a result.';
    if (this.state === 'error') return 'Confirm the VIA service is running and reachable.';
    if (this.state === 'running') return 'Submitting the request to the configured analysis IO.';
    return 'The response panel will show metrics, recommendations, and raw JSON.';
  }

  private readError(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
  }
}
