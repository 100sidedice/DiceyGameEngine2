import { grabData, setData } from "../CoreUtils/data.js";

/**
 * The base component class. All components shall extent from this.
 */
class Component {
    constructor(entity, data){
        this.entity = entity;
        this.data = data;
    }
    /**
     * Push an event to the entity this component is attached to.
     *  - See Entity.pushEvent for more details.
     *  ### Scope
     *  Scope determines which entities will handle the event. 
     * All scopes beside the ones below are Relative.
     *   - scope == [".OtherComponent"] would be pushed to the entity this component is attached to, and handled by any component named "OtherComponent" on that entity, if it exists.
     *   
     *   - scope == ["..EntityName.componentName"]
     * 
     *   - scope == ["...EntityName.componentName"] would be pushed to the parent of the entity this component is attached to, and handled by any component named "componentName" on that entity, if it exists. The number of dots determines how many levels up the event will be pushed.
     * 
     *   - scope == ["ManagerName.EntityName.componentName"] Notice how there is not a starting period. No period = next manager up, instead of entity up.
     * 
     *   - scope == ["ManagerName.EntityName"] Would be pushed to all components of said entity.
     * 
     * Notes
     *   - If you add additional periods beyond the first one, it will look for that entitys parent.
     *
     *  Special scopes:
     *  - scope == ["__global"], the event will be pushed to Program. Not recommended for performance reasons.
     *  - scope == ["__self"], the event will only be handled by this component's entity.
     *  - scope == ["__children"], the event will be pushed to all children of this component's entity.
     * @param {String} name 
     * @param {Array} scope 
     * @param {Object} data 
     * @returns 
     */
    pushEvent(name, scope, data){
        const result = this.entity.pushEvent(name, scope, data);
        return result;
    }
    /**
     * Handles an event that is pushed to the entity this component is attached to.
     *  - See Entity.pushEvent for more details.
     * @param {String} name 
     * @param {Object} data 
     */
    handleEvent(name, data){
        if (name == "log") {console.log(data);} 
    }
}