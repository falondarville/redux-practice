import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => res.json())
	.then(post => dispatch({
		type: FETCH_POSTS,
		payload: posts
	}));
}