import { Component } from '@angular/core';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styles: []
})
export class EditMemberComponent {

  constructor(private memberService: MemberService) {}

  onSubmit(): void {
  }
}
