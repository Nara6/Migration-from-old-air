package net.camalpha.learn.articlemanagement.shared.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Response
 * @author tang.leanghour
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class DataResponse<T> {

    private String status;
    private Integer code;
    private T data;
}
