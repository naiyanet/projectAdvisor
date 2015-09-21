/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.CourseClass;
import th.co.geniustree.intenship.advisor.repo.CourseClassRepo;

/**
 *
 * @author User
 */
@RestController
public class CourseClassController {
    @Autowired
    private CourseClassRepo courseClassRepo;
    
    @RequestMapping(value = "/getcourseclass",method = RequestMethod.GET)
    public Page<CourseClass> getCourseClass (Pageable pageable){
        return courseClassRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/savecourseclass",method = RequestMethod.POST)
    public void saveCourseClass(@Validated @RequestBody CourseClass courseClass){
        courseClassRepo.save(courseClass);
    }
    
    @RequestMapping(value = "/deletecourseclass",method = RequestMethod.POST)
    public void deleteCourseClass(@RequestBody CourseClass courseClass){
        courseClassRepo.delete(courseClass);
    }
}
