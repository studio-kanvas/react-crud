import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';


export default function CourseForm({onChange, onSave}) {
    return(
         <form>
            <TextInput 
                name="title"
                label="Title"
                placeholder="Title of the course"
                onChange={onChange}
            />

            <input 
                type="submit" 
                className="btn btn-primary" 
                onClick={onSave} 
            />
            
            <input 
                type="button" 
                className="btn btn-default btn-space" 
                value="Cancel"
            />
        </form>        
    );
}



CourseForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    errors: PropTypes.object
};