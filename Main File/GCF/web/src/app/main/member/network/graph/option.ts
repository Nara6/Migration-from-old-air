export const Option = {


    // configure: {
    //   enabled: true,
    //   filter: 'nodes,edges',
    //   container: undefined,
    //   showButton: true
    // }, 

    physics: {
        enabled: true,
        hierarchicalRepulsion: {
            springLength: 70,
            nodeDistance: 100
        },
        timestep: 0.40,
        stabilization: {
            enabled: true,
            iterations: 2000,
            updateInterval: 30,
            fit: true
        }
    }, 

    autoResize: true,

    interaction:{

        hover:false, 
        dragNodes: false , 
        dragView: false,
        zoomView: false
    },

        
    //===========================>> Layout
    layout: {
        hierarchical: {
            treeSpacing:500,
            levelSeparation: 120,
            sortMethod:'directed', 
            edgeMinimization: false,
            blockShifting:false, 
            //direction:'LR'
        }, 
    }, 
    
    //===========================>> Edge
    edges:{
        arrows: 'to',
        color: 'red',
        font: '12px arial #ff0000',
        scaling:{
            label: true,
        },
        
        shadow: true,
       

        smooth: {
            enabled: true,
            type: "dynamic",
            roundness: 0.5
        },

      
    
    }, 

    //===========================>> Node
    nodes:{
        scaling: {
            label: false
        }, 
        shadow: true, 
        image:{
            unselected:'assets/images/user.jpg', 
            selected:'assets/images/user.jpg'
        }, 
        shape:'image', 
        size:30
    
    }, 
    
    //===========================>> Group
    groups: {
        useDefaultGroups: true,
        myGroup: {color:{background:'red'}, borderWidth:10}
    }, 
      
      
    
  };