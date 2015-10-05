/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.SelectCategory;
import th.co.geniustree.intenship.advisor.repo.SelectCategoryRepo;

/**
 *
 * @author User
 */
@RestController
public class SelectCategoryController {
    
    @Autowired
    private SelectCategoryRepo selectCategoryRepo;
    
    @RequestMapping(value = "/saveselectcategory",method = RequestMethod.POST)
    public void saveSelectCategory(@RequestBody SelectCategory selectCategory){
        System.out.println("--------------------------------------------------------->"+selectCategory.getCategoryCourse());
        System.out.println("--------------------------------------------------------->"+selectCategory.getCategoryGroupCourse());
        System.out.println("--------------------------------------------------------->"+selectCategory);
        SelectCategory sel = new SelectCategory();
        sel = selectCategory;
        sel.setCategoryCourse(selectCategory.getCategoryCourse());
        sel.setCategoryGroupCourse(selectCategory.getCategoryGroupCourse());
        selectCategoryRepo.save(sel);
    }
  
}
