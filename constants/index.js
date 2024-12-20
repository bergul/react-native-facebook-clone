const { getStatusBarHeight } = require('react-native-status-bar-height');
import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
export const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
export const STATUSBAR_HEIGHT = getStatusBarHeight()
export const BASE_URL = 'http://localhost:3000'
export const permission = {
    PUBLIC: 1,
    GROUP: 2,
    SETTING: 3
}
export const notificationTypes = {
    NEW_POST_IN_GROUP: 1,
    NEW_PHOTO_IN_GROUP: 2,
    ANYONE_REACT_YOUR_POST: 3,
    ANYONE_REACT_YOUR_COMMENT: 4,
    ANYONE_ADD_TO_STORY: 5,
    ANYONE_ANSWER_YOUR_COMMENT: 6,
    ANYONE_ACCEPT_YOUR_FRIEND_REQUEST: 7,
    ANYONE_COMMENT_POST_IN_GROUP_TOO: 8,
    ANYONE_COMMENT_POST_OF_ANYONE_TOO: 9,
    ANYONE_TAG_YOU_ON_POST_IN_GROUP: 10,
    ANYONE_TAG_YOU_ON_POST_OF_ANYONE: 11,
    ANYONE_LIVE_STREAM: 12,
    ANYONE_ANSWER_YOUR_COMMENT_IN_GROUP: 13,
}
export const resultTypes = {
    ALL: 0,
    PEOPLE: 1,
    PAGE: 2,
    GROUP: 3,
    POST: 4,
    VIDEO: 5,
    IMAGE: 6,
    EVENT: 7
}
export const pageNavigationTypes = {
    HOME: 0,
    INTRODUCTION: 1,
    POSTS: 2,
    VIDEOS: 3,
    PHOTOS: 4,
    EVENT: 5,
    COMMUNICATION: 6,
}
export const searchType = {
    KEYWORD: 0,
    PEOPLE: 1,
    PAGE: 2,
    GROUP: 3
}
export const reactionTypes = {
    LIKE: 1,
    LOVE: 2,
    HAHA: 3,
    WOW: 4,
    SAD: 5,
    ANGRY: 6
}
export const productTypes = {
    RECOMMEND: 0,
    FURNITURE: 1,
    COMMON: 2,
    MY_AREA: 3,
    GARDEN: 4,
    COMPUTER: 5,
    TOOL: 6,
    MUSICAL_INSTRUMENT: 7
}
export const actionStories = {
    FETCH_STORIES_REQUEST: 'FETCH_STORIES_REQUEST',
    FETCH_STORIES_FAILURE: 'FETCH_STORIES_FAILURE',
    FETCH_STORIES_SUCCESS: 'FETCH_STORIES_SUCCESS'
}
export const watchSearchRecommendActions = {
    FETCH_WATCH_SEARCH_RECOMMENDS_REQUEST: 'FETCH_WATCH_SEARCH_RECOMMENDS_REQUEST',
    FETCH_WATCH_SEARCH_RECOMMENDS_FAILURE: 'FETCH_WATCH_SEARCH_RECOMMENDS_FAILURE',
    FETCH_WATCH_SEARCH_RECOMMENDS_SUCCESS: 'FETCH_WATCH_SEARCH_RECOMMENDS_SUCCESS'
}
export const marketplaceActions = {
    FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS'
}

export const pageDetailActions = {
    FETCH_PAGE_DETAIL_REQUEST: 'FETCH_PAGE_DETAIL_REQUEST',
    FETCH_PAGE_DETAIL_FAILURE: 'FETCH_PAGE_DETAIL_FAILURE',
    FETCH_PAGE_DETAIL_SUCCESS: 'FETCH_PAGE_DETAIL_SUCCESS',
    FETCH_PAGE_VIDEOS_REQUEST: 'FETCH_PAGE_VIDEOS_REQUEST',
    FETCH_PAGE_VIDEOS_FAILURE: 'FETCH_PAGE_VIDEOS_FAILURE',
    FETCH_PAGE_VIDEOS_SUCCESS: 'FETCH_PAGE_VIDEOS_SUCCESS',
    FETCH_PAGE_PHOTOS_REQUEST: 'FETCH_PAGE_PHOTOS_REQUEST',
    FETCH_PAGE_PHOTOS_FAILURE: 'FETCH_PAGE_PHOTOS_FAILURE',
    FETCH_PAGE_PHOTOS_SUCCESS: 'FETCH_PAGE_PHOTOS_SUCCESS',
    FETCH_PAGE_POSTS_REQUEST: 'FETCH_PAGE_POSTS_REQUEST',
    FETCH_PAGE_POSTS_FAILURE: 'FETCH_PAGE_POSTS_FAILURE',
    FETCH_PAGE_POSTS_SUCCESS: 'FETCH_PAGE_POSTS_SUCCESS',
    FETCH_PAGE_EVENTS_REQUEST: 'FETCH_PAGE_EVENTS_REQUEST',
    FETCH_PAGE_EVENTS_FAILURE: 'FETCH_PAGE_EVENTS_FAILURE',
    FETCH_PAGE_EVENTS_SUCCESS: 'FETCH_PAGE_EVENTS_SUCCESS',
    FETCH_PAGE_POST_DETAIL_REQUEST: 'FETCH_PAGE_POST_DETAIL_REQUEST',
    FETCH_PAGE_POST_DETAIL_FAILURE: 'FETCH_PAGE_POST_DETAIL_FAILURE',
    FETCH_PAGE_POST_DETAIL_SUCCESS: 'FETCH_PAGE_POST_DETAIL_SUCCESS',
    SET_PAGE_NAVIGATION_TAB: 'SET_PAGE_NAVIGATION_TAB'
}
export const searchingActions = {
    SEARCH_USERS_REQUEST: 'SEARCH_USERS_REQUEST',
    SEARCH_USERS_FAILURE: 'SEARCH_USERS_FAILURE',
    SEARCH_USERS_SUCCESS: 'SEARCH_USERS_SUCCESS',
    SEARCH_POSTS_REQUEST: 'SEARCH_POSTS_REQUEST',
    SEARCH_POSTS_FAILURE: 'SEARCH_POSTS_FAILURE',
    SEARCH_POSTS_SUCCESS: 'SEARCH_POSTS_SUCCESS',
    SEARCH_PAGES_REQUEST: 'SEARCH_PAGES_REQUEST',
    SEARCH_PAGES_FAILURE: 'SEARCH_PAGES_FAILURE',
    SEARCH_PAGES_SUCCESS: 'SEARCH_PAGES_SUCCESS',
    SEARCH_GROUPS_REQUEST: 'SEARCH_GROUPS_REQUEST',
    SEARCH_GROUPS_FAILURE: 'SEARCH_GROUPS_FAILURE',
    SEARCH_GROUPS_SUCCESS: 'SEARCH_GROUPS_SUCCESS'
}
export const notificationsActions = {
    FETCH_NOTIFICATIONS_REQUEST: 'FETCH_NOTIFICATIONS_REQUEST',
    FETCH_NOTIFICATIONS_FAILURE: 'FETCH_NOTIFICATIONS_FAILURE',
    FETCH_NOTIFICATIONS_SUCCESS: 'FETCH_NOTIFICATIONS_SUCCESS'
}
export const videoControlActions = {
    RESET_WATCHING_STATUS: 'RESET_WATCHING_STATUS',
    SET_WATCHING_VIDEO: 'SET_WATCHING_VIDEO',
    SET_FIXED_HEIGH_WATCHING_VIDEO: 'SET_FIXED_HEIGH_WATCHING_VIDEO',
}
export const watchVidesActions = {
    FETCH_WATCH_VIDEOS_REQUEST: 'FETCH_WATCH_VIDEOS_REQUEST',
    FETCH_WATCH_VIDEOS_FAILURE: 'FETCH_WATCH_VIDEOS_FAILURE',
    FETCH_WATCH_VIDEOS_SUCCESS: 'FETCH_WATCH_VIDEOS_SUCCESS',
    FETCH_SEEN_WATCH_VIDEOS_REQUEST: 'FETCH_SEEN_WATCH_VIDEOS_REQUEST',
    FETCH_SEEN_WATCH_VIDEOS_FAILURE: 'FETCH_SEEN_WATCH_VIDEOS_FAILURE',
    FETCH_SEEN_WATCH_VIDEOS_SUCCESS: 'FETCH_SEEN_WATCH_VIDEOS_SUCCESS',
    FETCH_WATCH_VIDEO_DETAIL_REQUEST: 'FETCH_WATCH_VIDEO_DETAIL_REQUEST',
    FETCH_WATCH_VIDEO_DETAIL_FAILURE: 'FETCH_WATCH_VIDEO_DETAIL_FAILURE',
    FETCH_WATCH_VIDEO_DETAIL_SUCCESS: 'FETCH_WATCH_VIDEO_DETAIL_SUCCESS',
    FETCH_VIDEOS_FROM_THREAD_REQUEST: 'FETCH_VIDEOS_FROM_THREAD_REQUEST',
    FETCH_VIDEOS_FROM_THREAD_FAILURE: 'FETCH_VIDEOS_FROM_THREAD_FAILURE',
    FETCH_VIDEOS_FROM_THREAD_SUCCESS: 'FETCH_VIDEOS_FROM_THREAD_SUCCESS',
    SET_CURRENT_WATCHING_POSITION: 'SET_CURRENT_WATCHING_POSITION',
    SET_THREAD_WATCHING_STATUS: 'SET_THREAD_WATCHING_STATUS',
    PAUSE_THREAD_WATCHING_STATUS: 'PAUSE_THREAD_WATCHING_STATUS',
    PUSH_THREAD_HEIGHT_MAP: 'PUSH_THREAD_HEIGHT_MAP'
}
export const groupCategoriesActions = {
    FETCH_GROUP_CATEGORIES_REQUEST: 'FETCH_GROUP_CATEGORIES_REQUEST',
    FETCH_GROUP_CATEGORIES_FAILURE: 'FETCH_GROUP_CATEGORIES_FAILURE',
    FETCH_GROUP_CATEGORIES_SUCCESS: 'FETCH_GROUP_CATEGORIES_SUCCESS'
}
export const groupDetailActions = {
    FETCH_GROUP_DETAIL_REQUEST: 'FETCH_GROUP_DETAIL_REQUEST',
    FETCH_GROUP_DETAIL_FAILURE: 'FETCH_GROUP_DETAIL_FAILURE',
    FETCH_GROUP_DETAIL_SUCCESS: 'FETCH_GROUP_DETAIL_SUCCESS'
}
export const categoryGroupListActions = {
    FETCH_CATEGORY_GROUPS_REQUEST: 'FETCH_CATEGORY_GROUPS_REQUEST',
    FETCH_CATEGORY_GROUPS_FAILURE: 'FETCH_CATEGORY_GROUPS_FAILURE',
    FETCH_CATEGORY_GROUPS_SUCCESS: 'FETCH_CATEGORY_GROUPS_SUCCESS'
}
export const historyActions = {
    FETCH_GROUP_HISTORIES_REQUEST: 'FETCH_GROUP_HISTORIES_REQUEST',
    FETCH_GROUP_HISTORIES_FAILURE: 'FETCH_GROUP_HISTORIES_FAILURE',
    FETCH_GROUP_HISTORIES_SUCCESS: 'FETCH_GROUP_HISTORIES_SUCCESS',
    FETCH_HOME_HISTORIES_REQUEST: 'FETCH_HOME_HISTORIES_REQUEST',
    FETCH_HOME_HISTORIES_FAILURE: 'FETCH_HOME_HISTORIES_FAILURE',
    FETCH_HOME_HISTORIES_SUCCESS: 'FETCH_HOME_HISTOIES_SUCCESS'
}
export const postsActions = {
    FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
    FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
    FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS'
}
export const systemImagesActions = {
    FETCH_SYSTEM_IMAGES_REQUEST: 'FETCH_SYSTEM_IMAGES_REQUEST',
    FETCH_SYSTEM_IMAGES_FAILURE: 'FETCH_SYSTEM_IMAGES_FAILURE',
    FETCH_SYSTEM_IMAGES_SUCCESS: 'FETCH_SYSTEM_IMAGES_SUCCESS'
}
export const groupPostsActions = {
    FETCH_GROUP_POSTS_REQUEST: 'FETCH_GROUP_POSTS_REQUEST',
    FETCH_GROUP_POSTS_FAILURE: 'FETCH_GROUP_POSTS_FAILURE',
    FETCH_ALLGROUP_POSTS_SUCCESS: 'FETCH_ALLGROUP_POSTS_SUCCESS',
    FETCH_INGROUP_POSTS_SUCCESS: 'FETCH_INGROUP_POSTS_SUCCESS'
}
export const groupActions = {
    FETCH_GROUPS_REQUEST: 'FETCH_GROUPS_REQUEST',
    FETCH_GROUPS_FAILURE: 'FETCH_GROUPS_FAILURE',
    FETCH_GROUPS_SUCCESS: 'FETCH_GROUPS_SUCCESS'
}
export const friendActions = {
    FETCH_RECOMMEND_FRIENDS_REQUEST: 'FETCH_RECOMMEND_FRIENDS_REQUEST',
    FETCH_RECOMMEND_FRIENDS_FAILURE: 'FETCH_RECOMMEND_FRIENDS_FAILURE',
    FETCH_RECOMMEND_FRIENDS_SUCCESS: 'FETCH_RECOMMEND_FRIENDS_SUCCESS',
    FETCH_FRIEND_REQUESTS_REQUEST: 'FETCH_FRIEND_REQUESTS_REQUEST',
    FETCH_FRIEND_REQUESTS_FAILURE: 'FETCH_FRIEND_REQUESTS_FAILURE',
    FETCH_FRIEND_REQUESTS_SUCCESS: 'FETCH_FRIEND_REQUESTS_SUCCESS',
}
export const userActions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    FETCH_FRIENDS_REQUEST: 'FETCH_FRIENDS_REQUEST',
    FETCH_FRIENDS_FAILURE: 'FETCH_FRIENDS_FAILURE',
    FETCH_FRIENDS_SUCCESS: 'FETCH_FRIENDS_SUCCESS',
    FETCH_HIGHLIGHT_PHOTOS_REQUEST: 'FETCH_HIGHLIGHT_PHOTOS_REQUEST',
    FETCH_HIGHLIGHT_PHOTOS_FAILURE: 'FETCH_HIGHLIGHT_PHOTOS_FAILURE',
    FETCH_HIGHLIGHT_PHOTOS_SUCCESS: 'FETCH_HIGHLIGHT_PHOTOS_SUCCESS',
    FETCH_PROFILE_POSTS_REQUEST: 'FETCH_PROFILE_POSTS_REQUEST',
    FETCH_PROFILE_POSTS_FAILURE: 'FETCH_PROFILE_POSTS_FAILURE',
    FETCH_PROFILE_POSTS_SUCCESS: 'FETCH_PROFILE_POSTS_SUCCESS',
}
export const userXActions = {
    RESET_USERX: 'RESET_USERX',
    FETCH_USERX_REQUEST: 'FETCH_USERX_REQUEST',
    FETCH_USERX_FAILURE: 'FETCH_USERX_FAILURE',
    FETCH_USERX_SUCCESS: 'FETCH_USERX_SUCCESS',
    FETCH_USERX_FRIENDS_REQUEST: 'FETCH_USERX_FRIENDS_REQUEST',
    FETCH_USERX_FRIENDS_FAILURE: 'FETCH_USERX_FRIENDS_FAILURE',
    FETCH_USERX_FRIENDS_SUCCESS: 'FETCH_USERX_FRIENDS_SUCCESS',
    FETCH_USERX_HIGHLIGHT_PHOTOS_REQUEST: 'FETCH_USERX_HIGHLIGHT_PHOTOS_REQUEST',
    FETCH_USERX_HIGHLIGHT_PHOTOS_FAILURE: 'FETCH_USERX_HIGHLIGHT_PHOTOS_FAILURE',
    FETCH_USERX_HIGHLIGHT_PHOTOS_SUCCESS: 'FETCH_USERX_HIGHLIGHT_PHOTOS_SUCCESS',
    FETCH_USERX_PROFILE_POSTS_REQUEST: 'FETCH_USERX_PROFILE_POSTS_REQUEST',
    FETCH_USERX_PROFILE_POSTS_FAILURE: 'FETCH_USERX_PROFILE_POSTS_FAILURE',
    FETCH_USERX_PROFILE_POSTS_SUCCESS: 'FETCH_USERX_PROFILE_POSTS_SUCCESS',
}
export const bgColorsActions = {
    FETCH_BGCOLORS_REQUEST: 'FETCH_BGCOLORS_REQUEST',
    FETCH_BGCOLORS_FAILURE: 'FETCH_BGCOLORS_FAILURE',
    FETCH_BGCOLORS_SUCCESS: 'FETCH_BGCOLORS_SUCCESS'
}
export const postDetailActions = {
    FETCH_POST_DETAIL_REQUEST: 'FETCH_POST_DETAIL_REQUEST',
    FETCH_POST_DETAIL_FAILURE: 'FETCH_POST_DETAIL_FAILURE',
    FETCH_POST_DETAIL_SUCCESS: 'FETCH_POST_DETAIL_SUCCESS',
    CLOSE_POST_DETAIL_MODAL: 'CLOSE_POST_DETAIL_MODAL',
    OPEN_COMMENTS_MODAL: 'OPEN_COMMENTS_MODAL',
    CLOSE_COMMENTS_MODAL: 'CLOSE_COMMENTS_MODAL'
}
export const showingStoryActions = {
    SET_SHOWING_STORY_REQUEST: 'SET_SHOWING_STORY_REQUEST',
    SET_SHOWING_STORY: 'SET_SHOWING_STORY',
    SET_VIEWED_STORY_REQUEST: 'SET_VIEWED_STORY_REQUEST',
    SET_VIEWED_STORY_FAILURE: 'SET_VIEWED_STORY_FAILURE',
    SET_VIEWED_STORY_SUCCESS: 'SET_VIEWED_STORY_SUCCESS',
}
export const FIXED_STATUSBAR_HEIGHT = 44