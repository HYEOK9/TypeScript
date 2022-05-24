import crypto from 'crypto';
interface BlockShape {
    hash: string;
    prevHash: string;
    data: string;
    height: number;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public data: string,
        public height: number
    ) {
        this.hash = Block.calculateHash(prevHash, data, height);
    }
    static calculateHash = (
        prevHash: string,
        data: string,
        height: number
    ): string => {
        const toHash = `${prevHash}${data}${height}`;
        return crypto.createHash('sha512').update(toHash).digest('hex');
    };
}

class BlockChain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }
    private getPrevHash = (): string => {
        if (this.blocks.length == 0) return '';
        return this.blocks[this.blocks.length - 1].hash;
    };
    public addBlock = (data: string): void => {
        const newBlock = new Block(
            this.getPrevHash(),
            data,
            this.blocks.length + 1
        );
        this.blocks.push(newBlock);
    };
    public getBlocks = (): Block[] => {
        return [...this.blocks];
    };
}

const blockchain = new BlockChain();

blockchain.addBlock('first');
blockchain.addBlock('second');
blockchain.addBlock('third');
blockchain.addBlock('fourth');
console.log(blockchain.getBlocks());
