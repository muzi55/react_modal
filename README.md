# React 모달창 만들기

![Alt text](%EB%AA%A8%EB%8B%AC%EC%B0%BD.gif)

useState로 상태가 관리되는 모달창입니다.

`Modal` 컴포넌트를 사용합니다

boolean 값을 이용해 열고 닫히는 모달창이며 props로 `children`, `modalState`, `setModalState` 값을 받습니다.

- `children` : React 노드 입니다. HTML태그, 문자열 등 입력할 수 있습니다.

  ```tsx
  <Modal>
    <h3>모달창 제목</h3>
    <p>모달창 내용</p>
    <section>
      <h4>섹션 제목</h4>
      ...
    </section>
  </Modal>
  ```

  <br/>
  <br/>

- `modalState` : true, false로 이루어진 boolean 값입니다.

  ```tsx
  <Modal modalState={false | true}>
    <p>모달 내용</p>
  </Modal>
  ```

  <br/>
  <br/>

- `setModalState` : `modalState` 의 값을 바꿀 수 있는 함수입니다.

  ```tsx
  <Modal modalState={modalState} setModalState={setModalState}>
    <p>모달 내용</p>
  </Modal>
  ```
