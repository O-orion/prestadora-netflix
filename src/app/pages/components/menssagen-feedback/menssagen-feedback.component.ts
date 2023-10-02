import { Component, Input } from '@angular/core';
import { MensagemStatus, Status } from 'src/app/enums/Status';

@Component({
  selector: 'app-menssagen-feedback',
  templateUrl: './menssagen-feedback.component.html',
  styleUrls: ['./menssagen-feedback.component.scss']
})
export class MenssagenFeedbackComponent {

  @Input() menssagem: MensagemStatus = MensagemStatus.FALHA;
  @Input() status: Status = Status.FALHA;

  constructor() { }

  ngOnInit() { }

}
