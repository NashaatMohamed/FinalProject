import { Component, NgZone, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ClassCrudServicesService } from '../../services/class-crud-services.service';
import { AuthService } from '../../shared/auth.service';
export class Comment {
 id:any;
  comment!: any;
  name!:any;
  created_at!:any;
  user_id!:any;
  session_id!: string;
  static session_id: string;
  
  
 
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
comments:Comment[] = [];

 
  private session_id!: string;
  public user_id?:string;
  commentForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private route: ActivatedRoute,private router:Router,
    private ngZone:NgZone) {}
    

  ngOnInit() {
    this.user_id = localStorage.getItem('user-id') || "0";
    this.session_id = this.route.snapshot.params['id'];
    this.commentForm = this.fb.group({
      comment:[''],
      name:[''],
      session_id:this.session_id,
      user_id:this.user_id
    });


    this.commentService.getcomment(this.session_id).subscribe( res=>{
      console.log(res)
     
      this.comments = res;
    });
  }

  onCommentCancel() {
    this.commentForm.reset();
  }

  delete(id:any,i:any){
    console.log(id);
    this.commentService.deletecomment(this.user_id).subscribe(res => {
      this.comments.splice(i,1);
    })
  }


  onSubmit():any{
    this.commentService.addComment(this.commentForm.value)
    .subscribe((res)=>{
      console.log('tcomment added successfully')
      console.log(res);
    },(err)=>{
      console.log(err)
    })
  }

}
function id(id: any) {
  throw new Error('Function not implemented.');
}

