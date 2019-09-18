@extends('report.layout.master')
@section('content')
    <div class="wraper" style="padding: 20px;">
        <?php
        $i=0;
        $total_qty=0;
        $subtotal=0;
        $total=0;
        ?>
        <table id="table">
            <tr>
                <th>ID</th>
                <th>ITEM FROM</th>
                <th>SKU</th>
                <th>QTY</th>
                <th>RATE</th>
                <th>AMOUNT</th>
            </tr>
            @foreach($data as $item)
                <tr>
                    <td>{{++$i}}</td>
                    <td>amazon</td>
                    <td>A006Z598</td>
                    <td style="padding-left: 85px">{{$item['qty']}}</td>
                    <td style="padding-left: 80px">{{$item['rate']}}</td>
                    <td style="padding-left: 65px">{{$item['amount']}}</td>
                </tr>
                <?php
                $total_qty+=$item['qty'];
                $subtotal+=$item['rate'];
                $total+=$item['amount'];
                ?>
            @endforeach
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>TotalQty = {{$total_qty}}</td>
                <td>Subtotal = {{$subtotal}}</td>
                <td>Total = {{$total}}</td>
            </tr>

        </table>
    </div>
    <div class="wraper" style="padding: 10px; height: 10px;"></div>
    <script type="text/php">
    if (isset($pdf)) {
        $x = 250;
        $y = 745;
        $text = "Page {PAGE_NUM} of {PAGE_COUNT}";
        $font = null;
        $size = 14;
        $color = array(255,0,0);
        $word_space = 0.0;  //  default
        $char_space = 0.0;  //  default
        $angle = 0.0;   //  default
        $pdf->page_text($x, $y, $text, $font, $size, $color, $word_space, $char_space, $angle);
    }
</script>
    <div class="pd-10">
        <div class="bdd"></div>
    </div>
    <br>
@endsection
