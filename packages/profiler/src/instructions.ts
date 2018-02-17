
const isPush = inst => inst >= 0x60 && inst < 0x7f;

const pushDataLength = inst => inst - 0x5f;

const instructionLength = inst => isPush(inst) ? 1 + pushDataLength(inst) : 1;

const instIndexToByte = bytecode => {
    const result: number[] = [];
    let byteIndex = 0;
    let instIndex = 0;
    while (byteIndex < bytecode.length) {
        const instruction = bytecode[byteIndex];
        const length = instructionLength(instruction);
        
        result.push(byteIndex);
        
        byteIndex += length;
        instIndex += 1;
    }
    return result;
};

export const programCounters = bytecode => instIndexToByte(bytecode);