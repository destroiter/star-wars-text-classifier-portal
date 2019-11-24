import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TextClass } from '../share/text-class.enum';
import { ServerService } from '../share/server.service';

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.scss']
})
export class ClassifierComponent implements OnInit {
  public result: TextClass | null = null;

  public textEditorForm: FormGroup;

  constructor(
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
    this.textEditorForm = new FormGroup({
        'textEditorControl': new FormControl()
    });
  }

  public submit(): void {
    this.serverService.classify({ text: this.textEditorForm.controls['textEditorControl'].value })
      .subscribe(response => this.result = response.textClass);
  }
}
