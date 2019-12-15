$(function(){
    var $orders=$('#orders');
    var $name=$('#name');
    var $drink=$('#drink');
    var orderTemplate = $('#order-template').html();
    function addOrder(order){
        $orders.append(Mustache.render(orderTemplate,order));
    }
 /**********************************/   
    $.ajax({
        type:'GET',
        url:"http://127.0.0.1:5500/Ajax2019.12.14/api/orders.json",
        success:function(orders){
            $.each(orders,function(i,order){
                addOrder(order);
            });
        },
        error:function(){
            alert("加载失败！");
        }
    });
/***********************************/
    $('#add-order').on('click',function(){
        var order={
            name: $name.val(),
            drink: $drink.val(),
        };
        $.ajax({
            type:'POST',
            url:"http://127.0.0.1:5500/Ajax2019.12.14/api/orders.json",
            dataType:'json',
            data:order,
            success:function(newOrder){
                $orders.append('<li>name: '+ newOrder.name +', drink: '+ newOrder.drink + '</li>');
            },
            error:function(){
                alert('error saving!');
            }
        });
    });
/***********************************/
    $orders.delegate('.editOrder','click',function(){
        var $li=$(this).closest('li');
        $li.find('input.name').val($li.find('span.name').html());
        $li.find('input.drink').val($li.find('span.drink').html());
        $li.addClass('edit');
    });

    $orders.delegate('.cancelEdit','click',function(){
        $(this).closest('li').removeClass('edit');
    });

    $orders.delegate('.saveEdit','click',function(){
        var $li=$(this).closest('li');
        var order={
            name:$li.find('input.name').val(),
            drink:$li.find('input.drink').val()
        };
        $.ajax({
            type:'PUT',
            url:'api/orders.json/' + $li.attr('data-id'),
            dataType:'json',
            data:order,
            success:function(newOrder){
               $li.find('span.name').html(order.name);
               $li.find('span.drink').html(order.drink);
               $li.removeClass('edit');
            },
            error:function(){
                alert('error saving!');
            }
        });
    });
});