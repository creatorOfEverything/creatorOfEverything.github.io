<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

$result = array();

// echo '<pre>';
// print_r($_REQUEST);
// echo '</pre>';

foreach ($_REQUEST['required'] as $key => $value) {

  if($value == '' || $value === '0') {
    $result['error'][$key] = 'Это обязательное поле';
  };

};

if(empty($result["error"])){

  if(CModule::IncludeModule('iblock')){
  $el = new CIBlockElement;
  $arLoadProductArray111 = Array(
    "IBLOCK_ID" => 15,
    "PROPERTY_VALUES"=> array(
      'DEALER' => $_REQUEST['required']['dealer'],
      'CITY' => $_REQUEST['required']['city'],
      'FIO' => $_REQUEST['required']['FIO'],
      'APPOINTMENT' => $_REQUEST['required']['appointment'],
      'PHONE' => $_REQUEST['required']['phone'],
      'EMAIL' => $_REQUEST["required"]['mail'],
      'SIZE' => $_REQUEST["required"]['size-choice'],
      'COMMENTS' => $_REQUEST["required"]['comment']
    ),
    "NAME" => 'Конференция "Выбери свою стихию"' //название элемента
  );

  $el->Add($arLoadProductArray111);
}

$message .=  "Название дилерского центра: " . $_REQUEST['required']['dealer'] . "<br>";
$message .=  "Город: " . $_REQUEST['required']['city'] . "<br>";
$message .=  "ФИО: " . $_REQUEST['required']['FIO'] . "<br>";

$message .=  "Размер футболки: " . $_REQUEST['required']['size-choice'] . "<br>";

$message .=  "Контактный телефон: " . $_REQUEST['required']['phone'] . "<br>";
$message .=  "Должность: " . $_REQUEST["required"]['appointment'] . "<br>";
$message .=  "Email: " . $_REQUEST["required"]['mail'] . "<br>";

$message .=  "Комментарии: " . $_REQUEST["required"]['comment'] . "<br>";

$message = print_r($message, true);
$toEmail = 'evgenia.bolnokina@isuzu.ru';
// $toEmail = 'a.karamushko@supportix.ru, e.lomova@supportix.ru';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: noreply@isuzu.ru';

  if(!mail($toEmail, 'Заявка с формы "Анкета"', $message, implode("\r\n", $headers))){
    $arResult["error"]["form"] = "Ошибка отправки письма.";
  };

};



echo json_encode($result);
