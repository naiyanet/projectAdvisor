/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import th.co.geniustree.intenship.advisor.model.Account;

/**
 *
 * @author Account
 */
public interface AccountRepo extends JpaRepository<Account, Integer>{

    public Account findByEmail(String email);
    
    public Page<Account> findByDtype(String dtype , Pageable pageable);
    
}
