import { HelloWorld } from './../source/HelloWorld';
import { expect } from 'chai';
import 'mocha';

describe('Greeter tests', () => {
    it('should return correct greeting', ( ) => 
    {
        const result = new HelloWorld('myname').sayHi();
        expect(result).to.equal("Hi, myname");
    });
});
