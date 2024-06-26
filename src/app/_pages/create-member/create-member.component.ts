import { Component } from '@angular/core';
import { CreateMember } from 'src/app/_interfaces/create-member';
import { MemberService } from 'src/app/_services/member.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styles: []
})
export class CreateMemberComponent {
myForm: any;

constructor(
  private memberService: MemberService,
  private formBuilder: FormBuilder,
) {
  this.myForm = this.formBuilder.group({
    name: '',
    email: '',
    semester: 0,
    career: ''
  })
}

  onSubmit(): void {
    this.memberService.createMember(this.myForm).subscribe({
    });
  }
}
