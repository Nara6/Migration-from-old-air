package net.camalpha.learn.articlemanagement.shared.model.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Page Response
 * @author tang.leanghour
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PageResponse<T> {

    private List<T> items;
    private Integer limit;
    private Integer offset;
    private Integer total;
}
