import AntiTheft from "./AntiTheft";
import FireProof from "./FireProof";

class ItcastSafetyDoor implements AntiTheft,FireProof{
    antiTheft(): void {
        console.log("防盗")
    }

    fireProof(): void {
        console.log("防火")
    }


}

export default ItcastSafetyDoor;