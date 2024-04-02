import Button from "../components/Button";
import {
  RiAlarmWarningFill,
  RiAlertFill,
  RiAwardFill,
  RiShieldFlashLine,
  RiStarHalfLine,
} from "react-icons/ri";
const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button rounded primary>
          <RiAlarmWarningFill />
          Primary
        </Button>
      </div>
      <div>
        <Button rounded secondary>
          <RiStarHalfLine />
          Secondary
        </Button>
      </div>
      <div>
        <Button rounded warning>
          <RiAlertFill />
          Warning
        </Button>
      </div>
      <div>
        <Button rounded success>
          <RiAwardFill />
          Success
        </Button>
      </div>
      <div>
        <Button rounded danger>
          <RiShieldFlashLine />
          Danger
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
