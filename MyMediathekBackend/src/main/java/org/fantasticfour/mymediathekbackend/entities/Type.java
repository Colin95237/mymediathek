package org.fantasticfour.mymediathekbackend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Type {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String icon;
}
