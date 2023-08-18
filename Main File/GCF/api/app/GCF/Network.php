<?php

namespace App\GCF;
use Illuminate\Http\Request;

use Carbon\Carbon;

use App\Model\Member\Main as Node;
use App\Model\Transaction\USD as USDTrx; //For calculating today PV. 

class Network{
    
  	public static function getRoodNode( $memberId = 0 ){
        $member = Node::find($memberId); 
        if($member){
            return Self::nodeInterface($member);
        }
        return []; 
    }

    public static function getNodes(){
        //echo env('FILE_URL'); die; 

        $limit = 10; 

        $nodes = []; 
        $edges = [];


        //===========================================================================>> Level I
        $nodeId      =   intval(isset($_GET['nodeId'])?$_GET['nodeId']:0);
        //$page      =   intval(isset($_GET['nodeId'])?$_GET['page']:1);
        $dataLevel1 = Node::where('parent_node_id', $nodeId)->orderBy('id', 'asc')->paginate($limit);
        if(count($dataLevel1)){
            foreach($dataLevel1 as $rowLevel1){

                $nodes[] = Self::nodeInterface($rowLevel1);
                $edges[] = ['from'=>$nodeId, 'to'=>$rowLevel1->id];


                //===========================================================================>> Level II
                $dataLevel2 = Node::where('parent_node_id', $rowLevel1->id)->orderBy('id', 'asc')->paginate($limit);
                if(count($dataLevel2)>0){
                    foreach($dataLevel2 as $rowLevel2){

                        $nodes[] = Self::nodeInterface($rowLevel2);
                        $edges[] = ['from'=>$rowLevel1->id, 'to'=>$rowLevel2->id];

                        //===========================================================================>> Level III
                        $dataLevel3 = Node::where('parent_node_id', $rowLevel2->id)->orderBy('id', 'asc')->paginate($limit);
                        if(count($dataLevel3)>0){
                            foreach($dataLevel3 as $rowLevel3){

                                $nodes[] = Self::nodeInterface($rowLevel3);
                                $edges[] = ['from'=>$rowLevel2->id, 'to'=>$rowLevel3->id];

                                //For level 3, we need to check for more people
                                $numOfRef = Node::where('parent_node_id', $rowLevel3->id)->count();
                                if($numOfRef>0){
                                    $nodes[] = [
                                        'id'        =>  $rowLevel3->id.'-0', 
                                        'label'     =>  'More', 
                                        'image'     =>  env('FILE_PUBLIC_URL').'assets/images/ppl.png'
                                    ];
                                    $edges[] = ['from'=>$rowLevel3->id, 'to'=>$rowLevel3->id.'-0'];
                                }
                            }

                            //===============================>> More Member to display
                            if($dataLevel3->hasMorePages()){
                                $more = $dataLevel3->total()-$dataLevel3->perPage()*$dataLevel3->currentPage(); 
                                $moreNode = $rowLevel2->id.'-'.$dataLevel3->currentPage();
                                $nodes[] = [
                                    'id'        =>  $moreNode, 
                                    'label'     =>  'More '.$more, 
                                    'image'     =>  env('FILE_PUBLIC_URL').'assets/images/ppl.png'
                                ];
                                $edges[] = ['from'=>$rowLevel2->id, 'to'=>$moreNode];
                            }
                        }
                    }

                    //===============================>> More Member to display
                    if($dataLevel2->hasMorePages()){
                        $more = $dataLevel2->total()-$dataLevel2->perPage()*$dataLevel2->currentPage(); 
                        $moreNode = $rowLevel1->id.'-'.$dataLevel2->currentPage();
                        $nodes[] = [
                            'id'        =>  $moreNode, 
                            'label'     =>  'More '.$more, 
                            'image'     =>  env('FILE_PUBLIC_URL').'/assets/images/ppl.png'
                        ];
                        $edges[] = ['from'=>$rowLevel1->id, 'to'=>$moreNode];
                    }
                }
            }
            //===============================>> More Member to display
            if($dataLevel1->hasMorePages()){
                $more = $dataLevel1->total()-$dataLevel1->perPage()*$dataLevel1->currentPage(); 
                $moreNode = $nodeId.'-'.$dataLevel1->currentPage();
                $nodes[] = [
                    'id'=>$moreNode, 
                    'label'=>'More '.$more, 
                    'image'=>'assets/images/ppl.png'
                ];
                $edges[] = ['from'=>$nodeId, 'to'=>$moreNode];
            }

        }
            
        return ['nodes'=> $nodes, 'edges'=>$edges];
    }

    public static function nodeInterface($member){
        
        return [
            'id'            =>  $member->id, 
            'label'         =>  $member->user->uid, 
            'uid'           =>  $member->user->uid, 
            'name'          =>  $member->user->name, 
            'image'         =>  Self::getPositionIcon($member), 
            'position'      =>  $member->rank ?  $member->rank->name : ''
        ];
        
    }

    public static function getPositionIcon($member){
        return $member->rank ? env('FILE_PUBLIC_URL').$member->rank->icon : ''; 
        
    }
  
}
