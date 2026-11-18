export const sectionShortcuts=[
 {id:'about',label:'About'},
 {id:'skills',label:'Expertise'},
 {id:'projects',label:'Projects'},
 {id:'experience',label:'Journey'},
 {id:'trading',label:'Trader'},
 {id:'contact',label:'Contact'},
];
export function currentSection(positions,offset=140) {
 let current='hero';
 for(const {id,top} of positions)if(Number.isFinite(top)&&top<=offset)current=id;
 return current;
}
