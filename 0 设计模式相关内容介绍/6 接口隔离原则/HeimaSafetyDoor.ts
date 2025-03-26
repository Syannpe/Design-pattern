import SafetyDoor from "./SafetyDoor";

class HeimaSafetyDoor implements SafetyDoor{
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