/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package christmascard16;

/**
 *
 * @author Carles Hernandez-Ferre
 */
public class MapManager {
    
    private int index;
    private Map[] collection;
    
    public MapManager() {
        this.index = 0;
        this.collection = new Map[1];
        this.collection[0] = buildLevelOne();
    }
    
    public Map nextMap() {
        Map map = this.collection[this.index];
        this.index += 1;
        return(map);
    }
    
    public final Map buildLevelOne() {
        Map map = new Map(18, 5);
        map.addElement( // Add floor
            new Floor(0, 4, 18)
        );
        
        map.addElement( // Add post toRight
            new Post(0, 3, 'r')
        );
        
        map.addElement( // Add post toLeft
                new Post(17, 3, 'l')
        );
        
        map.addDoor( // Add door
            new Door(3, 3)
        );
        
        map.addHat( // Add hat
            new Hat(13, 3)
        );
        
        map.addSnowman( // Add snowman
            new Snowman(7, 3)
        );
        
        return(map);
    }
}



