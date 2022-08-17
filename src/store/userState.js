import { atom, useRecoilState } from "recoil";

export const userState = atom({
  key: "userState", //何でもイイが、ファイル名と揃えるのが自然かな？
  default: { isAdmin: false }
});

//利用する関数
// useRecoilState(userState) ... 値取得、更新できる。再レンダリングされる。
// useRecoilValue(userState) ... 値取得のみ可能。
// useSetRecoilState(userState) ... 更新のみ可能。再レンダリングされない。
