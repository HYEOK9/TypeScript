import crypto from 'crypto';
class Block {
    constructor(prevHash, data, height) {
        this.prevHash = prevHash;
        this.data = data;
        this.height = height;
        this.hash = Block.calculateHash(prevHash, data, height);
    }
}
Block.calculateHash = (prevHash, data, height) => {
    const toHash = `${prevHash}${data}${height}`;
    return crypto.createHash('sha512').update(toHash).digest('hex');
};
class BlockChain {
    constructor() {
        this.getPrevHash = () => {
            if (this.blocks.length == 0)
                return '';
            return this.blocks[this.blocks.length - 1].hash;
        };
        this.addBlock = (data) => {
            const newBlock = new Block(this.getPrevHash(), data, this.blocks.length + 1);
            this.blocks.push(newBlock);
        };
        this.getBlocks = () => {
            return [...this.blocks];
        };
        this.blocks = [];
    }
}
const blockchain = new BlockChain();
blockchain.addBlock('first');
blockchain.addBlock('second');
blockchain.addBlock('third');
blockchain.addBlock('fourth');
console.log(blockchain.getBlocks());
