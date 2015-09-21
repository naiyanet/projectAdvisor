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
import th.co.geniustree.intenship.advisor.model.Category;
import th.co.geniustree.intenship.advisor.repo.CategoryRepo;

/**
 *
 * @author User
 */
@RestController
public class CategoryController {

    @Autowired
    private CategoryRepo categoryRepo;

    @RequestMapping(value = "/getcategory", method = RequestMethod.GET)
    public Page<Category> getCategory(Pageable pageable) {
        return categoryRepo.findAll(pageable);
    }

    @RequestMapping(value = "/savecategory", method = RequestMethod.POST)
    public void saveCategory(@Validated @RequestBody Category category) {
        categoryRepo.save(category);
    }

    @RequestMapping(value = "/deletecategory", method = RequestMethod.POST)
    public void deleteCategory(@RequestBody Category category){
        categoryRepo.delete(category);
    }
}
