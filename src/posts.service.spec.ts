import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    const { id } = postsService.create(post);

    const result = postsService.find(id);

    expect(result?.text).toEqual(post.text);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const { id } = postsService.create(post);

    const result = postsService.find(id);

    expect(result?.text).toEqual(post.text);
  });
});