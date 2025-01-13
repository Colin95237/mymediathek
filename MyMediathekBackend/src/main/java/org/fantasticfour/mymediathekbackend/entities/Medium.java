package org.fantasticfour.mymediathekbackend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Medium {
    @GeneratedValue
    @Id
    private Long id;
    @NotBlank
    private String name;

    @ManyToOne
    @NotNull
    private Type type;
    private String author;
    private String description;
    private LocalDate publishedDate;

    private String link;
    private Boolean wasRead;
    @Min(1)
    @Max(10)
    @NotNull
    private Integer priority;
    private String comment;
    @Min(0)
    @Max(5)
    private Double rating;
    private String imageLink;

}
