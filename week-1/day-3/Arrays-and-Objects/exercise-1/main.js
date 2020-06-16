const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

const newGenes = [...genes];

let placeholder;
let placeholder2;

let indexOfRLF = genes.indexOf('RLF');
let indexOfCRYZ = genes.indexOf('CRYZ')

placeholder = genes[indexOfCRYZ > indexOfRLF ? indexOfCRYZ : indexOfRLF];
placeholder2 = placeholder == 'CRYZ' ? 'RLF' : 'CRYZ';

newGenes[newGenes.indexOf(placeholder)] = placeholder2;
newGenes[newGenes.indexOf(placeholder2)] = placeholder;

newGenes.splice(newGenes.indexOf('AZIN2'), 1);
newGenes.push(genes[genes.indexOf('AZIN2')]);
newGenes.push(genes[genes.indexOf('AZIN2')]);

newGenes.unshift('FXT');

console.log(newGenes);
