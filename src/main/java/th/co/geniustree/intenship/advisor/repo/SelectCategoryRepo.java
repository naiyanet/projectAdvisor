/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import th.co.geniustree.intenship.advisor.model.SelectCategory;

/**
 *
 * @author User
 */
public interface SelectCategoryRepo extends JpaRepository<SelectCategory, Integer>{
    
}
