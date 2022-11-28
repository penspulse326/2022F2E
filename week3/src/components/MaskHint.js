import styled from "styled-components";
import { GreyButton } from "./Buttons";
import { ChatFrame } from "./ChatFrame";
import { NamedWorker } from "./Workers";

const Mask = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const Dialog = styled(ChatFrame)`
  position: absolute;
  left: 548px;
  top: 300px;

  height: 381px;
  width: 834px;

  box-sizing: border-box;
  white-space: pre-line;
`;

export default function MaskHint({ name, content, btnText, toggle }) {
  return (
    <Mask>
      <Dialog>
        <div className="text">{content}</div>
        <div className="btn" onClick={() => toggle(false)}>
          <GreyButton content={btnText} />
        </div>
      </Dialog>
      <NamedWorker number={2} name={name}></NamedWorker>
    </Mask>
  );
}
