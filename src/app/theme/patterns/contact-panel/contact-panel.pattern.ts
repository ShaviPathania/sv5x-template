import { Component, Input } from '@angular/core';
import { SharedContactFormComponent, type ContactFormIO, mockContactFormIO } from '@sv5x/common';

@Component({
  selector: 'st5-contact-panel-pattern',
  imports: [SharedContactFormComponent],
  template: `
    <section class="contact-panel-vars rounded-lg border border-sv5-line bg-sv5-panel p-4 shadow-sv5">
      <sv5x-contact-form
        [io]="io"
      />
    </section>
  `,
  styles: [
    `
      .contact-panel-vars {
        --shared-contact-field-bg: var(--sv5-panel-muted);
        --shared-contact-field-border: var(--sv5-line);
        --shared-contact-heading: var(--sv5-ink);
        --shared-contact-muted: var(--sv5-muted);
        --shared-contact-label: var(--sv5-ink);
        --shared-contact-accent: var(--sv5-teal);
        --shared-contact-focus: rgba(79, 209, 197, 0.72);
        --shared-contact-focus-ring: rgba(79, 209, 197, 0.14);
        --shared-contact-button-bg: var(--sv5-teal);
        --shared-contact-button-text: #061512;
        --shared-contact-status-bg: rgba(255, 255, 255, 0.04);
        --shared-contact-success: var(--sv5-green);
        --shared-contact-error: var(--sv5-red);
        --shared-contact-pending: var(--sv5-amber);
      }
    `,
  ],
})
export class St5ContactPanelPattern {
  @Input()
  io: ContactFormIO = mockContactFormIO;
}
