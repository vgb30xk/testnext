import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/messi.jpg"
            alt="logo"
            style={{ display: "block", width: 80, borderRadius: "20px" }}
          />
        </div>
        <Header as="h1">메시</Header>
      </div>
      <Gnb />
    </div>
  );
}
