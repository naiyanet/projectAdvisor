/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;
import th.co.geniustree.intenship.advisor.repo.StudentRepo;

/**
 *
 * @author User
 */
public class EmailUniqueValidator implements ConstraintValidator<EmailUnique, String>{
    @Autowired
    private StudentRepo studentRepo;
    
    @Override
    public void initialize(EmailUnique constrainAnnotation) {
        
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if(Strings.isNullOrEmpty(value)){
            return true;
        }
        studentRepo.findByEmailIgnoreCase(String value);
    }
    
}
