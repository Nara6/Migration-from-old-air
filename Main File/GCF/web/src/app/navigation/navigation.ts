import { FuseNavigation } from '@fuse/types';

import { cpNavigation } from './cp.navigation';
import { memberNavigation } from './member.navigation';

const panel = localStorage.getItem('panel'); 
let tempNav:FuseNavigation[] = []; 
if(panel == 'Admin'){
    tempNav = cpNavigation; 
}else if(panel == 'Member'){
    tempNav = memberNavigation; 
}
//tempNav = cpNavigation; 
export const navigation: FuseNavigation[] = tempNav; 
