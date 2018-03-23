import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/users';
import { UsersService } from '../../core/users.service';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.scss']
})
export class DetayComponent implements OnInit {
  
  @Input() hero: User;
  constructor() { }

  ngOnInit() {
      console.log(this.hero);
  }

}
