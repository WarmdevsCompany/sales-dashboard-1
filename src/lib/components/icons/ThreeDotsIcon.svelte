<div class="dots d-flex justify-cc align-center ">
   <span class="relative b-radius-50 {$$props.bgColor}"></span>
</div>

<style>
    .dots{
        width: 24px;
        height: 24px;
        
    }
    span{
        width: 4px;
        height: 4px;
        background-color: var(--white);
    }
    span.green{
        background-color: var(--green-dark-medium);
    }
    span:before, span:after{
        content: '';
        width: 4px;
        height: 4px;
        position: absolute;
        background-color: inherit;
        border-radius: 50%;
    }
    span:before{
        top: -8px;
    }
    span:after{
        bottom: -8px;
    }
</style>