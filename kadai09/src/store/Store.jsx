import { createStore } from 'redux';

const initialState = {
    posts: [
        { 
            postId: 1, 
            postName: "サンプル記事1",
            postDetail: "サンプル記事1のテキストです。サンプル記事1のテキストです。サンプル記事1のテキストです。"
        },
        { 
            postId: 2,
            postName: "サンプル記事2", 
            postDetail: "サンプル記事2のテキストです。サンプル記事2のテキストです。サンプル記事2のテキストです。"
        },
        { 
            postId: 3,
            postName: "サンプル記事3",
            postDetail: "サンプル記事3のテキストです。サンプル記事3のテキストです。サンプル記事3のテキストです。"
        }
    ],
};

const reducer = (state = initialState) => {
    return state;
};

const store = createStore(reducer);
console.log(store.getState());

export default store;