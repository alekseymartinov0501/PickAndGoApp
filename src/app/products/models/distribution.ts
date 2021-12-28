import { Aisle } from "./Aisle";
import { SequenceAisle } from "./sequenceAisle";

export interface Distribution{
    id: number;
    aisleId: number;
    aisle: Aisle;
    sequenceAisle: SequenceAisle;
}