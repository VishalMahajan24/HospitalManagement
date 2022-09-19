package com.mindtree.hospitaldetails.repository;

import com.mindtree.hospitaldetails.entity.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PatientRepository extends CrudRepository<Patient,Integer> {

}