import HeimaSafetyDoor from "./HeimaSafetyDoor";
import ItcastSafetyDoor from "./ItcastSafetyDoor";

const door:HeimaSafetyDoor = new HeimaSafetyDoor();
door.antiTheft();
door.fireProof();
door.waterProof();

console.log("-".repeat(20));

const door2:ItcastSafetyDoor = new ItcastSafetyDoor();
door.antiTheft();
door.fireProof();