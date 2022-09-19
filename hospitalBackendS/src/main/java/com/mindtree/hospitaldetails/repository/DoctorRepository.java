package com.mindtree.hospitaldetails.repository;

import com.mindtree.hospitaldetails.entity.Doctor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:4200")

public interface DoctorRepository  extends CrudRepository<Doctor,Integer> {
    public Doctor findByName(String name);
}