import React, { useState, useMemo } from "react";

const UseMemo = () => {
  // ブラウザのメモリに保存しておく
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square =useMemo(() => {
    let i = 0;
    // わざと重い処理を書いている(使わないときはコメントアウト)
    // while (i < 2000000000) {
    //   i++;
    // }
    return count02 * count02;
  }, [count02]);

  return (
    <div>
      <h1>useMemo</h1>
      <div>カウント１：{count01}</div>
      <div>カウント２：{count02}</div>
      <div>結果：{square}</div>
      <button
        onClick={() => {
          setCount01(count01 + 1);
        }}
      >
        ＋
      </button>
      <button
        onClick={() => {
          setCount02(count02 + 1);
        }}
      >
        ＋
      </button>
    </div>
  );
};

export default UseMemo;
