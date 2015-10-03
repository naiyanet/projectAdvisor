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
import th.co.geniustree.intenship.advisor.model.CourseSubjectClassFive;
import th.co.geniustree.intenship.advisor.repo.CourseSubjectClassFiveRepo;

/**
 *
 * @author User
 */
@RestController
public class CourseSubjectClassFiveController {
    @Autowired
    private CourseSubjectClassFiveRepo courseSubjectClassFiveRepo;
    
    @RequestMapping(value = "/getcoursesubjectclassfive",method = RequestMethod.GET)
    public Page<CourseSubjectClassFive> getCourseSubjectClassFive (Pageable pageable){
        return courseSubjectClassFiveRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/savecoursesubjectclassfive",method = RequestMethod.POST)
    public void saveCourseSubjectClassFive(@Validated @RequestBody CourseSubjectClassFive courseClass){
        courseSubjectClassFiveRepo.save(courseClass);
    }
    
    @RequestMapping(value = "/deletecoursesubjectclassfive",method = RequestMethod.POST)
    public void deleteCourseSubjectClassFive(@RequestBody CourseSubjectClassFive courseClass){
        courseSubjectClassFiveRepo.delete(courseClass);
    }
}
