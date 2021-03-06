import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { ReplyCommentInput } from './dto/reply-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver()
export class CommentResolver {
  constructor(private commentService: CommentService) {}
  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
    @Context() context,
  ) {
    return this.commentService.createComment(
      createCommentInput,
      context.req.user,
    );
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  deleteComment(@Args('commentId') commentId: string, @Context() context) {
    return this.commentService.deleteComment(commentId, context.req.user);
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  replyComment(
    @Args('replyCommentInput') replyCommentInput: ReplyCommentInput,
    @Context() context,
  ) {
    return this.commentService.replyComment(
      replyCommentInput,
      context.req.user,
    );
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
    @Context() context,
  ) {
    return this.commentService.updateComment(
      updateCommentInput,
      context.req.user,
    );
  }
}
