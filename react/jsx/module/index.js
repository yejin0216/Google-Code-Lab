/**
 * 파일명 : index.js
 * 설명 : 조리법 앱의 첫 시작 파일
 */

//웹팩은 import 문을 발견할 때마다 파일시스템에서 해당 모듈을 찾아 번들에 포함시킨다.
//대부분의 브라우저는 import를 지원하지 않는다. 바벨이 import를 require로 변환하기 때문에 작동 가능하다.
import React from 'react';
import {render} from 'react-dom';
import Menu from './menu';
import data from './data/data';

window.React = React; //브라우저 전체가 리액트 라이브러리를 볼 수 있다.

render(
    <Menu recipes={data} title="맛있는 조리법"/>,
    document.getElementById("react-container")
);