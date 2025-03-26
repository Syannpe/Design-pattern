import AntiTheft from "./AntiTheft";
import FireProof from "./FireProof";
import WaterProof from "./WaterProof";

class HeimaSafetyDoor implements AntiTheft,FireProof,WaterProof{
    antiTheft(): void {
        console.log("防盗")
    }

    fireProof(): void {
        console.log("防火")
    }

    waterProof(): void {
        console.log("防水")
    }

}

export default HeimaSafetyDoor;